import Premier from './categorias/Premier';
import Categoria from './Categoria';

const Main = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <Categoria/>
            <article>
                <Premier />
                <Premier />
            </article>
        </section>
    )
}
export default Main;