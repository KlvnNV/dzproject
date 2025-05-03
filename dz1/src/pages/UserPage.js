import { useParams} from 'react-router-dom';
function UserPage() {
    const {id, name, description} = useParams();
    return (
        <div>
            <h1>UserPage : {id} </h1>
            <p>Профиль: {name}</p>
            <p>{description}</p>
        </div>
    );
}

export default UserPage;