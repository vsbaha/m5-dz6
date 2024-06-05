import { useSelector } from "react-redux"
import '../App.css'


const Page = () => {
  const  selector = useSelector(state=>state.theme.isDarkMode)

    const  photos = 'https://static.wikia.nocookie.net/onepiece/images/4/42/Roronoa_Zoro_Manga_Post_Timeskip_Infobox.png/revision/latest?cb=20140619183920&path-prefix=ru'
  return (
    <div className={selector ? 'dark':'light'}>
        Hello
    </div>
  )
}

export default Page
