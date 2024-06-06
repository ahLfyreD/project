import { useForm } from 'react-hook-form';
import './ViewNews.css'
import { CiMail } from "react-icons/ci";


const ViewNews = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data)
  }

  return (
    <div className='asderf'>
      <div className='landing_Page_news_container'>
        <div className="row">
          <div className="text_block">
            <h1>Check Out Our Latest News <span>Here</span></h1>
          </div>
          <div className="sub_container">
            <div className="sub_content">
              <div className='text_content'>
                <CiMail style={{ fontSize: '30px', marginRight: '10px' }} />
                <h2>Get the latest Update to your mail</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form_shell">
                  <div className='input_container'>
                    <input
                      {...register("email", {
                        required: "Email is Required",
                        validate: (value) => {
                          if (!value.includes("@")) {
                            return "Email must be valid"
                          }

                          return true
                        }
                      })}
                      type="email"
                      placeholder='Email'
                    />
                    {errors.email && (
                      <div className='text_color'>{errors.email.message}</div>
                    )}
                  </div>
                  <button disabled={isSubmitting} type='submit' >
                    {isSubmitting ? "Loading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ViewNews
