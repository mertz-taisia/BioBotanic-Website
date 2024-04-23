import React, {useState, useEffect} from 'react';
import Note from './Note.js';
import { fetchPlantInGreenhouse, fetchNotesForPlant, addNoteForPlant } from '../supabaseService.js';



function Notes() {
  const [notes, setNotes] = useState([]);
  const [addingNote, setAddingNote] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [currentPlant, setCurrentPlant] = useState(null);
  

  useEffect(() => {
    const getNotes = async () => {
      try {
        const plant = await fetchPlantInGreenhouse();
        setCurrentPlant(plant);
        console.log("Plant fetched:", plant);
        if (plant) {
          const notes = await fetchNotesForPlant(plant.id);
          console.log("Notes fetched:", notes);
          setNotes(notes);
        }
      } catch (error) {
        console.error('Error fetching plant or notes:', error);
      }
    };

    getNotes();
  }, []);

  useEffect(() => {
    console.log('Notes after update:', notes);
    }, [notes]);


    const handleSaveNote = async () => {
      if (!noteText.trim()) {
        alert('Please enter a note text.');
        return;
      }
    
      try {
        const newNote = await addNoteForPlant(currentPlant.id, noteText);
        console.log('New note added:', newNote);
    
        if (newNote && newNote.length > 0) {
          setNotes(prevNotes => [...prevNotes, ...newNote]);  // Assuming newNote is an array with one item
          setNoteText('');
          setAddingNote(false);
        } else {
          console.log('No note was added, check your API function.');
        }
      } catch (error) {
        console.error('Error adding note:', error);
        alert(error.message);
      }
    };
    
  
  

  const handleAddNoteClick = () => {
    setAddingNote(true);
  };

  const handleNoteChange = (e) => {
    setNoteText(e.target.value);
  };


  const formatDate = (isoString) => {
    if (!isoString) {
      console.error('Missing or invalid date string:', isoString);
      return "Date not available";
    }
  
    const date = new Date(isoString);
    if (isNaN(date.getTime())) {
      console.error('Invalid date string:', isoString);
      return "Invalid date";
    }

    const nth = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    };
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];
    return `${monthName} ${day}${nth(day)}`;
  };
  


    return (
        <div class="w-full h-full bg-white rounded-md flex flex-col text-left justify-left p-4">
                <div>Notes</div>
                <div class="text-sm overflow-x-auto scrollable-area">
                  {notes.map((note) => (
                    <Note
                      key={note.id}
                      info={{ 
                        date: formatDate(note.created_at), 
                        text: note.note
                      }}
                      isNote={true}
                      intoGreenhouse={true}
                    />
                  ))}
                  </div>
                  <div>

                {addingNote ? (
                  <div className="flex flex-col">
                    <textarea
                      className="border p-2 rounded-md mb-2"
                      value={noteText}
                      onChange={handleNoteChange}
                      placeholder="Type your note here..."
                    />
                    <button
                      className="bg-blue-500 text-white p-2 rounded-md"
                      onClick={handleSaveNote}
                    >
                      Add
                    </button>
                  </div>
        ) : (
          <div 
            className="flex justify-center w-full border-2 border-[#BABABA] border-dashed rounded-md mt-4 p-2 cursor-pointer"
            onClick={handleAddNoteClick}
          >
            <div className="flex flex-row items-center w-full">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="17.5" stroke="#BABABA"/>
                    <mask id="path-2-inside-1_0_1" fill="white">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21 9H15V16L8 16L8 22H15V28H21V22H28V16L21 16V9Z"/>
                    </mask>
                    <path d="M15 9V8H14V9H15ZM21 9H22V8H21V9ZM15 16V17H16V16H15ZM8 16L8 15H7L7 16H8ZM8 22H7V23H8V22ZM15 22H16V21H15V22ZM15 28H14V29H15V28ZM21 28V29H22V28H21ZM21 22V21H20V22H21ZM28 22V23H29V22H28ZM28 16H29V15H28V16ZM21 16H20V17H21V16ZM15 10H21V8H15V10ZM16 16V9H14V16H16ZM8 17L15 17L15 15L8 15L8 17ZM9 22L9 16H7L7 22H9ZM15 21H8V23H15V21ZM16 28V22H14V28H16ZM21 27H15V29H21V27ZM20 22V28H22V22H20ZM28 21H21V23H28V21ZM27 16V22H29V16H27ZM21 17L28 17V15L21 15V17ZM20 9V16H22V9H20Z" fill="#BABABA" mask="url(#path-2-inside-1_0_1)"/>
                </svg>
              <div className="text-[#BABABA] italic ml-2">
                Add Note
              </div>
            </div>
          </div>
        )}

            </div>
        </div>
);
}

export default Notes;