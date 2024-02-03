import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import Header from "../Components/Header";
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import FooterComp from "../Components/Footer";
const SignUp = () => {
  const [formData,setFormData] = useState();
  const [errorMessage,setErrorMessage]=useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const onClickHandler = (e)=>{
      setFormData({...formData,[e.target.id]:e.target.value})
  };
  const handleSubmit = async(e)=>{
      e.preventDefault();
      if(!formData.username || !formData.email || !formData.password){
        return setErrorMessage("Please fill all field");
      }
      try{
          setLoading(true);
          setErrorMessage(null);
          const res = await fetch('/api/user/signup',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(formData),
        });
        const data = await res.json();
        if(data.success === false ){
          return setErrorMessage(data.message);
        }
        setLoading(false);
        if(res.ok){
          navigate('/signin')
        }
      }catch(error){
        setErrorMessage(error);
        setLoading(false);
      }
  } 
  return (
    <div>
      <Header />
      <div className="min-h-screen mt-32">
        <div className="flex flex-col gap-10 p-3 max-w-3xl mx-auto md:flex-row md:item-center">
          {/* left */}
          <div className="flex-1">
            <Link to="/" className="text-5xl">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg px-2 py-1">Aman's</span>Blog
            </Link>
            <p className="mt-2">Welcome to my demo project</p>
          </div>
          {/* right */}
          <div className="flex-1">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <Label value="Username" color="gray" />
                <TextInput type="text" id="username" color="info" onChange={onClickHandler}></TextInput>
              </div>
              <div>
                <Label value="Email" color="gray" />
                <TextInput type="email" id="email" color="info" onChange={onClickHandler}></TextInput>
              </div>
              <div>
                <Label value="Password" color="gray" />
                <TextInput type="password" id="password" color="info" onChange={onClickHandler}></TextInput>
              </div>
              <Button className="bg-indigo-500" type="submit" disabled={loading}>
                {
                  loading ? (
                   <>
                    <Spinner size='sm'/>
                    <span className="pl-3">Loading...</span>
                   </>
                  ):'SignUp'
                }
              </Button>
            </form>
            <div className="flex flex-rol gap-2 mt-2">
              <p>Have an account?</p>
              <Link to="/SignIn">SignIn</Link>
            </div>
            {
              errorMessage && (
                <Alert className="mt-5" color="failure">
                  {errorMessage}
                </Alert>
              )
            }
          </div>
        </div>
      </div>
      <FooterComp/>
    </div>
  )
}
export default SignUp;
