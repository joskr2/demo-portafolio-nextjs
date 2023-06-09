
const Quote = () => {

  const quote = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quas dicta eligendi harum et repudiandae fugiat? Asperiores mollitia laborum, ab similique, beatae perferendis obcaecati vel saepe voluptates amet quia quisquam!"
  const author = "Lorem ipsum"

  return (
    <div className="flex flex-col m-auto my-6 px-6 py-5 md:px-16 md:py-20 ">
      <h1 className=" text-center mb-1 text-xl md:text-4xl tracking-widest">{
        `" ${quote}"`
      } </h1>
      <span className="text-right text-gray-500 text-lg md:text-md">{
        author
      }</span>
    </div>
  )
}

export default Quote