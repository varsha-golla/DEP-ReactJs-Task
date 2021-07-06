import SearchMovie from './SearchMovie';
import PageMiddle from './PageMiddle';
import Movies from './Movies';
import Footer from './Footer';

function HomePage() {
    return (
        <>
            <SearchMovie />
            <PageMiddle />
            <Movies />
            <Footer />
        </>
    );
}

export default HomePage;
