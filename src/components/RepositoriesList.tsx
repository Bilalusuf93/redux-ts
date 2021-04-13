import { useState } from "react"
import { symbolName } from "typescript";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypeSelector";

const RepositoriesList = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state) => state.repositories);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        searchRepositories(term);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)} />
                <button>search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <span>loading...</span>}
            {!error && !loading &&
                data.map((name) => {
                    return <div key={name}>{name}</div>
                })
            }
        </div>
    )
}

export default RepositoriesList