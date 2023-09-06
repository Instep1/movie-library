import Movies from "../Movies/Movies";

const Main = ({films}) => {
    return (
        <main className="container content">
            <Movies films={films}/>
        </main>
    )
}

export default Main;