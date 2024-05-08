import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PageOne = () => {

  const [data, setData] = useState([])

  const { pageId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:5000/data/${pageId}`);
      setData(data);
    }

    fetchData();
  }, [pageId])


  return (
    <div>
      {data.content}
    </div>
  )
}

export default PageOne
