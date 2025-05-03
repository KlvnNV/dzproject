import { Link } from 'react-router-dom';
const users = [
    { id: 1, name: 'Анна', description: 'Разработчик фронтенда' },
    { id: 2, name: 'Борис', description: 'UX-дизайнер' },
    { id: 3, name: 'Светлана', description: 'Тестировщик' }
];

function HomePage() {
    return (
        <div>
            <h1>Главная страница:</h1>
            <h2>Пользователи:</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}/${user.name}/${user.description}`}>{user.name}</Link>                        
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default HomePage;