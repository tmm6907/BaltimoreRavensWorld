
const LatestContent = () => {
    const callRavens = async () => {
        let data = await fetch('https://www.google.com/search?q=baltimore+ravens')
        let res = await data.json()
        console.log(res)
    }
  return (
      <div>
        <div>Hello World</div>
        <button onClick={callRavens}>Call Ravens</button>
      </div>
  )
}