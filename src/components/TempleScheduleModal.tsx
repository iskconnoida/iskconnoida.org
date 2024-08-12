import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TempleScheduleModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 pt-36 flex items-center justify-center z-50" onClick={handleOverlayClick}>
            <div className="bg-white w-full max-w-lg p-8 rounded-lg relative max-h-[80vh] overflow-y-auto">
                <button 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    &#x2715; {/* This is the X (close) icon */}
                </button>
                <h2 className="text-2xl font-bold text-violet-600 mb-4" style={{ textShadow: '1px 1px 0 #000' }}>Temple timings | Open all days</h2>
                <p className="text-sm text-gray-500 mb-6">Closed from 13:00 - 16:00 and 21:00 - 04:30 (Next day)</p>

                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <p className="font-bold text-lg">04:30</p>
                        <p>Mangala arati</p>
                        <p className="text-sm text-gray-400">First worship of the day</p>
                    </div>
                    
                    <div>
                        <p className="font-bold text-lg">05:00</p>
                        <p>Tulsi-Puja</p>
                        <p className="text-sm text-gray-400">Honoring Tulasi plant</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">07:30</p>
                        <p>Sringar darshan</p>
                        <p className="text-sm text-gray-400">Greeting the Deities in new outfit</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">07:40</p>
                        <p>Guru puja</p>
                        <p className="text-sm text-gray-400">Honoring the Founder-acharya</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">08:00</p>
                        <p>Bhagavatam class</p>
                        <p className="text-sm text-gray-400">Discourse from Vedic scripture</p>
                    </div>
                    <div>
                        <p className="font-bold text-lg">12:30</p>
                        <p>Raj Bhoga arati</p>
                        <p className="text-sm text-gray-400">Post noon worship</p>
                    </div>
                    
                    
                    <div>
                        <p className="font-bold text-lg">18:30</p>
                        <p>Sandhya arati</p>
                        <p className="text-sm text-gray-400">Evening worship ceremony</p>
                    </div>
                    
                    <div>
                        <p className="font-bold text-lg">19:00</p>
                        <p>Bhagavad-gita discourse</p>
                        <p className="text-sm text-gray-400">Honoring Tulasi plant</p>
                    </div>
                    
                    <div>
                        <p className="font-bold text-lg">20:15</p>
                        <p>Shayana arati</p>
                        <p className="text-sm text-gray-400">Last worship ceremony of the day</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TempleScheduleModal;
