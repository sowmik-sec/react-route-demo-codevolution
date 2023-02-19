import { useParams } from "react-router-dom";

const UserDetails = () => {
  const params = useParams();
  console.log("key&val", params);
  const userId = params.userId;
  return <div>Details about user {userId}</div>;
};

export default UserDetails;
