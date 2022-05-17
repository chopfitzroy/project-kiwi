import localforage from "localforage";

type UpdateEditorContentSignature = (content: string) => Promise<void>;
const updateEditorContent: UpdateEditorContentSignature = async (content) => {
  try {
    await localforage.setItem<string>("editorContent", content);
    return;
  } catch (err) {
    console.warn("Unable to persist editor content to cache.", err);
    return;
  }
};

type FetchEditorContentSignature = () => Promise<null | string>;
const fetchEditorContent: FetchEditorContentSignature = async () => {
  try {
    const value = await localforage.getItem<string>("editorContent");
    return value;
  } catch (err) {
    console.warn("Unable to fetch editor content from cache.", err);
    return null;
  }
};

export { fetchEditorContent, updateEditorContent };
