import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <>
      <menu>
        <li>
          <button>Save</button>
        </li>
        <li>
          <button>Delete</button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </>
  );
}
