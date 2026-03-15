import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ConcertList } from './components/ConcertList';
import { PerformanceCarousel } from './components/PerformanceCarousel';
import { NoticeBoard } from './components/NoticeBoard';
import { News } from './components/News';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Concerts } from './components/Concerts';
import { ConcertDetail } from './components/ConcertDetail';
import { PhotoGalleryModal } from './components/PhotoGalleryModal';
import { Board } from './components/Board';
import { NoticeDetail } from './components/NoticeDetail';
import { Sponsorship } from './components/Sponsorship';
import { Inquiry } from './components/Inquiry';
import { TermsOfUse } from './components/TermsOfUse';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { useEffect, useState } from 'react';
import { concerts } from './data/concertData';

type Page = 'home' | 'about' | 'concerts' | 'concert-detail' | 'board' | 'notice-detail' | 'sponsorship' | 'inquiry' | 'admin' | 'carousel-demo' | 'terms-of-use' | 'privacy-policy';

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedConcertId, setSelectedConcertId] = useState<number | null>(null);
  const [selectedNoticeId, setSelectedNoticeId] = useState<number | null>(null);
  const [viewCounts, setViewCounts] = useState<Record<string, number>>({});
  const [previousPage, setPreviousPage] = useState<Page>('home'); // Track previous page for back navigation
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(false);
  const [scrollToBoardNews, setScrollToBoardNews] = useState(false);
  const [scrollToBoardNotice, setScrollToBoardNotice] = useState(false);
  
  // Store pagination state for Board page
  const [boardNoticePage, setBoardNoticePage] = useState(1);
  const [boardNewsPage, setBoardNewsPage] = useState(1);

  // Prevent right-click and scraping shortcuts
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Keep blocking only Ctrl+C for basic scrap prevention
      if (e.ctrlKey && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // 해시(#page) 기반으로 브라우저 뒤로가기 연동
  useEffect(() => {
    const getPageFromHash = (): Page => {
      const hash = window.location.hash.replace('#', '') as Page | '';
      const validPages: Page[] = [
        'home',
        'about',
        'concerts',
        'concert-detail',
        'board',
        'notice-detail',
        'magazine-detail',
        'sponsorship',
        'inquiry',
        'admin',
        'carousel-demo',
        'terms-of-use',
        'privacy-policy',
      ];
      return validPages.includes(hash as Page) ? (hash as Page) : 'home';
    };

    // 첫 로딩 시 해시 기준으로 페이지 설정
    const initialPage = getPageFromHash();
    setCurrentPage(initialPage);
    if (!window.location.hash) {
      window.location.hash = '#home';
    }

    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavigate = (page: Page) => {
    setPreviousPage(currentPage); // Store the current page as the previous page
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo(0, 0);
  };

  const handleSelectConcert = (concertId: number) => {
    setSelectedConcertId(concertId);
    handleNavigate('concert-detail');
  };

  const handleViewAllPhotos = () => {
    setIsPhotoGalleryOpen(true);
  };

  const handleClosePhotoGallery = () => {
    setIsPhotoGalleryOpen(false);
  };

  const handleBackToConcerts = () => {
    handleNavigate('concerts');
  };

  const handleSelectNotice = (noticeId: number) => {
    setSelectedNoticeId(noticeId);
    handleNavigate('notice-detail');
  };

  const handleViewAllNotices = () => {
    setScrollToBoardNotice(true);
    handleNavigate('board');
  };

  const handleViewAllNews = () => {
    setScrollToBoardNews(true);
    handleNavigate('board');
  };

  const handleIncrementViewCount = (id: string) => {
    setViewCounts(prevCounts => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1
    }));
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && (
          <>
            <HeroSlider />
            <ConcertList 
              onViewAll={() => handleNavigate('concerts')}
              onSelectConcert={handleSelectConcert}
            />
            <NoticeBoard
              onSelectNotice={handleSelectNotice}
              onViewAll={handleViewAllNotices}
            />
            <News 
              onViewAll={handleViewAllNews}
            />
          </>
        )}
        {currentPage === 'about' && <About />}
        {currentPage === 'concerts' && (
          <Concerts onSelectConcert={handleSelectConcert} />
        )}
        {currentPage === 'concert-detail' && selectedConcertId && (
          <ConcertDetail
            concertId={selectedConcertId}
            onBack={handleBackToConcerts}
            onViewAllPhotos={handleViewAllPhotos}
          />
        )}
        {currentPage === 'board' && (
          <Board 
            onSelectNotice={handleSelectNotice}
            viewCounts={viewCounts}
            noticePage={boardNoticePage}
            setNoticePage={setBoardNoticePage}
            newsPage={boardNewsPage}
            setNewsPage={setBoardNewsPage}
            scrollToNews={scrollToBoardNews}
            scrollToNotice={scrollToBoardNotice}
          />
        )}
        {currentPage === 'notice-detail' && selectedNoticeId && (
          <NoticeDetail
            noticeId={selectedNoticeId}
            onBack={() => handleNavigate('board')}
            onViewIncrement={handleIncrementViewCount}
          />
        )}
        {currentPage === 'sponsorship' && <Sponsorship />}
        {currentPage === 'inquiry' && <Inquiry />}
        {currentPage === 'admin' && <Admin />}
        {currentPage === 'carousel-demo' && <PerformanceCarousel />}
        {currentPage === 'terms-of-use' && (
          <TermsOfUse onBack={() => handleNavigate(previousPage)} />
        )}
        {currentPage === 'privacy-policy' && (
          <PrivacyPolicy onBack={() => handleNavigate(previousPage)} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} />
      
      {/* Photo Gallery Modal */}
      {selectedConcertId && (
        <PhotoGalleryModal
          concertTitle={concerts.find(c => c.id === selectedConcertId)?.title || ''}
          photos={concerts.find(c => c.id === selectedConcertId)?.images || []}
          isOpen={isPhotoGalleryOpen}
          onClose={handleClosePhotoGallery}
        />
      )}
    </div>
  );
}