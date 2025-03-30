import Form from "next/form";

export default function ContactForm() {
  async function handleSubmit(formData: FormData) {
    try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const content = formData.get("content")?.toString();

    const data = {
      name,
      email,
      subject,
      content,
    };
    const req = await fetch("https://api.tanvish.co.in/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
    console.log(req);
    if (!req.ok) {
      return alert("Error sending message. Please try again later.");
    }
    alert("Message sent successfully!");
  } catch (error) {
    console.log("Error:", error);
    alert("Error sending message. Please try again later.");
  }
  }
  return (
    <div className="mt-8 sm:w-1/2 flex flex-col border-2 border-cyan-200 items-center justify-center text-center bg-gray-800/30 p-4 md:p-8 rounded-lg shadow-lg">
      <Form action={handleSubmit} className="w-full">
        <div className="mb-4">
          <Label name="Name" />
          <Input name="name" type="text" />
        </div>
        <div className="mb-4">
          <Label name="Email" />
          <Input name="email" type="email" />
        </div>
        <div className="mb-4">
          <Label name="Subject" />
          <Input name="subject" type="text" />
        </div>
        <div className="mb-4">
          <Label name="Content" />
          <textarea
            id="content"
            name="content"
            rows={4}
            className="mt-1 border-2 border-cyan-200/40 block w-full rounded-md shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-gray-700 text-white"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 w-full cursor-pointer px-4 py-2 bg-white text-black font-bold rounded-md shadow-sm hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </Form>
    </div>)

}

function Label({name}: {name: string}) {
  return <label htmlFor={name.toLowerCase()} className="text-left block text-sm md:text-xl font-medium text-white">
  {name}:
</label>
}

function Input({name, type}: {name: string, type?:string}) {
  return <input
  type={ type ?? "text" }
  id={name.toLowerCase()}
  name={name.toLowerCase()}
  className="mt-1 border-2 border-cyan-200/40 h-8 block w-full rounded-md shadow-sm focus:border-cyan-500 focus:ring-cyan-500 bg-gray-700 text-white"
  required
/>
}