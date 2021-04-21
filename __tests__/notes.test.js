const fs = require('fs');
const {
    findById,
    createNewNote,
    validateNote,
    removeNote
} = require('../lib/notes.js');

jest.mock('fs');

test('finds note by id', () => {
    const startingNotes = [
        {
            "title": "note 1",
            "text": "text for note 1",
            "id": "24a506ed-1489-45eb-b349-383ea3d6144f"
        },
        {
            "title": "note 2",
            "text": "text for note 2",
            "id": "46e38c9c-f08e-4330-8625-1a22d2779c06"
        },
        {
            "title": "note 3",
            "text": "text for note 3",
            "id": "42c192f5-3f3c-441b-a015-181d66630159"
        }
    ];

    const result = findById('46e38c9c-f08e-4330-8625-1a22d2779c06', startingNotes);

    expect(result.title).toBe('note 2');
});

test('creates new note', () => {
    const startingNotes = [
        {
            "title": "note 1",
            "text": "text for note 1",
            "id": "24a506ed-1489-45eb-b349-383ea3d6144f"
        },
        {
            "title": "note 2",
            "text": "text for note 2",
            "id": "46e38c9c-f08e-4330-8625-1a22d2779c06"
        }   
    ];

    const result = createNewNote(
        {
            "title": "note 3",
            "text": "text for note 3",
            "id": "42c192f5-3f3c-441b-a015-181d66630159"
        }, startingNotes);

    expect(result.title).toBe('note 3');
    expect(startingNotes.length).toEqual(3);
});

test('validates note obj properties are strings', () => {
    const validNote = {
        "title": "note 1",
        "text": "text for note 1",
        "id": "24a506ed-1489-45eb-b349-383ea3d6144f"
    };

    const invalidNote = {
        "title": 1,
        "text": "text for note 1",
        "id": "24a506ed-1489-45eb-b349-383ea3d6144f"
    };

    expect(validateNote(validNote)).toBe(true);
    expect(validateNote(invalidNote)).toBe(false);
});

test('removes note', () => {
    const startingNotes = [
        {
            "title": "note 1",
            "text": "text for note 1",
            "id": "24a506ed-1489-45eb-b349-383ea3d6144f"
        },
        {
            "title": "note 2",
            "text": "text for note 2",
            "id": "46e38c9c-f08e-4330-8625-1a22d2779c06"
        },
        {
            "title": "note 3",
            "text": "text for note 3",
            "id": "42c192f5-3f3c-441b-a015-181d66630159"
        }
    ];

    const result = removeNote('46e38c9c-f08e-4330-8625-1a22d2779c06', startingNotes);

    expect(result.title).toBe('note 2');
    expect(startingNotes.length).toEqual(2);
    expect(startingNotes.includes(result)).toBe(false);
});