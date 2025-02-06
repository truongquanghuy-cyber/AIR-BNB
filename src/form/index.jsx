import "tailwindcss";

export function Form() {
    return (
        <form >
        <label htmlFor="name" className="">Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Submit</button>
        </form>
    );
}