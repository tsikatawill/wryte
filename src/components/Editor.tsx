import "react-quill/dist/quill.snow.css";
import "../styles/_editor.scss";
import { ChangeEvent, FC, FormEvent, useMemo, useRef, useState } from "react";
import { postCategoryT, postT } from "../types";
import { Container } from ".";
import { POSTCATEGORIES } from "../lib/postCategories";
import ReactQuill from "react-quill";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import { uploadImage } from "../utils/cloudinary";
import { v4 as uuid } from "uuid";

type Props = {
  handleSave: (post: postT) => void;
  post?: postT;
};

export const Editor: FC<Props> = ({ handleSave, post }) => {
  const [fullText, setFullText] = useState(post?.fullText || "");
  const [title, setTitle] = useState(post?.title || "");
  const [imageUrl, setImageUrl] = useState(post?.image || "");
  const [category, setCategory] = useState<postCategoryT>(
    post?.category || POSTCATEGORIES[1]
  );
  const editorRef = useRef<ReactQuill>(null);

  const validatePost: () => boolean = () => {
    if (
      title.trim().length > 0 &&
      category !== null &&
      fullText.trim().length > 0
    )
      return true;
    return false;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const post: postT = {
      // Update with logged in username
      author: "William M. Tsikata",
      title,
      image: imageUrl,
      category: category as postCategoryT,
      fullText,
      id: uuid(),
      dateCreated: dayjs().format("MM MMM, YYYY").toString(),
    };

    if (validatePost()) {
      handleSave(post);
      setFullText("");
      setTitle("");
      setImageUrl("");
    } else if (fullText === "") {
      toast.warn("Please type some text into the editor");
    } else {
      toast.error("Post could not be saved");
    }
  };

  const imageHandler = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const files: FileList | null = input.files;
      if (!files) return;
      const file = files[0];

      const formData = new FormData();
      formData.append("file", file);

      if (!editorRef.current) return;
      const range = editorRef.current.getEditorSelection();
      const imageURL = await uploadImage(formData);
      editorRef.current
        .getEditor()
        .insertEmbed(range?.index as number, "image", imageURL);
    };
  };

  const memoisedModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
          [{ color: [] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    []
  );

  return (
    <Container>
      <div className="space-y-5 md:space-y-8 my-10 max-w-3xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-4 gap-5 md:gap-8"
        >
          <div className="input-group col-span-4">
            <label
              htmlFor="title"
              className="font-semibold mb-2 block text-slate-600 dark:text-slate-300"
            >
              Title
            </label>
            <input
              required
              id="title"
              value={title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              placeholder="Type post title"
              className="input"
            />
          </div>

          <div className="input-group col-span-2">
            <label
              htmlFor="image"
              className="font-semibold mb-2 block text-slate-600 dark:text-slate-300"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                const file = e.target.files[0];

                const formData = new FormData();
                formData.append("file", file);

                uploadImage(formData)
                  .then((url) => {
                    toast.success("Image saved");
                    setImageUrl(url);
                  })
                  .catch(() => {
                    toast.error("Image not uploaded");
                  });
              }}
              placeholder="Type post title"
              className="input"
            />
          </div>

          <div className="input-group col-span-2">
            <label
              htmlFor="category"
              className="font-semibold mb-2 block text-slate-600 dark:text-slate-300"
            >
              Category
            </label>
            <select
              id="category"
              required
              value={category}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setCategory(e.target.value as postCategoryT);
              }}
              className="input"
            >
              {POSTCATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {imageUrl && (
            <div className="image-wrapper col-span-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-full max-h-96 md:max-h-[40rem] h-full object-cover"
              />
            </div>
          )}

          <div className="quill-wrapper w-full col-span-4">
            <ReactQuill
              ref={editorRef}
              modules={memoisedModules}
              theme="snow"
              value={fullText}
              onChange={setFullText}
            />
          </div>

          <button className="submit">Save post</button>
        </form>
      </div>
    </Container>
  );
};
