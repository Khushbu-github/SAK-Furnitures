import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { getGalleryItems } from '../utils/api';

const localImages = Array.from({ length: 23 }, (_, i) => ({
  _id: `local-${i + 1}`,
  title: `SAK Interior Project ${i + 1}`,
  imageUrl: new URL(`../assets/gallery/${i + 1}.jpeg`, import.meta.url).href,
}));

const GridIcon = ({ cols }) => {
  const colClass = cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-3' : 'grid-cols-4';
  return (
    <div className={`grid ${colClass} gap-[2px] w-[18px] h-[14px]`}>
      {[...Array(cols * 2)].map((_, i) => (
        <div key={i} className="bg-current rounded-[1px] w-full h-full" />
      ))}
    </div>
  );
};

const Gallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [apiImages, setApiImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gridSize, setGridSize] = useState(3);

  useEffect(() => {
    getGalleryItems()
      .then((res) => setApiImages(res.data || []))
      .catch(() => setApiImages([]))
      .finally(() => setLoading(false));
  }, []);

  const allItems = [...localImages, ...apiImages];

  const slides = allItems.map((item) => ({
    src: item.imageUrl || item.cloudinaryUrl,
    alt: item.title || 'Gallery Image',
  }));

  const getColumnsClass = () => {
    if (gridSize === 2) return 'columns-1 sm:columns-2';
    if (gridSize === 3) return 'columns-1 sm:columns-2 md:columns-3';
    return 'columns-1 sm:columns-2 md:columns-3 lg:columns-4';
  };

  return (
    <section id="gallery" ref={ref} className="py-16 px-4 bg-[#F4F3F1]">
      <div className="max-w-7xl mx-auto">

        {/* Grid Size Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white border border-[#0B8F8B]/20 rounded-xl px-5 py-2 shadow-sm">
            <span className="text-brand-charcoal text-sm font-medium pr-2">Grid Size:</span>
            {[2, 3, 4].map((size) => (
              <button
                key={size}
                onClick={() => setGridSize(size)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  gridSize === size
                    ? 'bg-[#D4A373] text-white shadow-md transform scale-110'
                    : 'text-brand-charcoal/60 hover:text-brand-deep-teal hover:bg-gray-50'
                }`}
                aria-label={`Set grid size to ${size}`}
              >
                <GridIcon cols={size} />
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-brand-soft-teal border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div
            key={gridSize} // re-animate on layout change
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`${getColumnsClass()} gap-4 space-y-4`}
          >
            {allItems.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-brand-deep-teal/20 transition-all duration-400"
                onClick={() => { setLightboxIndex(index); setLightboxOpen(true); }}
              >
                <img
                  src={item.imageUrl || item.cloudinaryUrl}
                  alt={item.title || 'Gallery Image'}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold text-sm font-heading tracking-wide uppercase">{item.title || 'SAK Portfolio'}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
      />
    </section>
  );
};

export default Gallery;
