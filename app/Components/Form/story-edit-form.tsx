import React, { useState } from 'react';
import { Button, TextField, Stack, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { StorySegment } from '@/app/lib/story-data';


const StoryEditForm = ({formData} : {formData : StorySegment}) => {
  const [segment, setSegment] = useState<StorySegment>({
    id: formData.id,
    sentences: formData.sentences,
    image: formData.image,
  });

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegment({ ...segment, id: parseInt(e.target.value) || 0 });
  };

  const handleSentenceChange = (index: number, value: string) => {
    const newSentences = [...segment.sentences];
    newSentences[index] = value;
    setSegment({ ...segment, sentences: newSentences });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSegment({ ...segment, image: e.target.value });
  };

  const addSentence = () => {
    setSegment({ ...segment, sentences: [...segment.sentences, ''] });
  };

  const removeSentence = (index: number) => {
    const newSentences = segment.sentences.filter((_, i) => i !== index);
    setSegment({ ...segment, sentences: newSentences });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted segment:', segment);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3} width={450}>
        <TextField
          label="ID"
          type="number"
          value={segment.id}
          onChange={handleIdChange}
          fullWidth
        />
        
        {segment.sentences.map((sentence, index) => (
          <Stack key={index} direction="row" spacing={1}>
            <TextField
              label={`Sentence ${index + 1}`}
              value={sentence}
              onChange={(e) => handleSentenceChange(index, e.target.value)}
              fullWidth
              multiline
              rows={2}
            />
            <IconButton onClick={() => removeSentence(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
        
        <Button
          startIcon={<AddIcon />}
          onClick={addSentence}
          variant="outlined"
        >
          Add Sentence
        </Button>
        
        <TextField
          label="Image URL"
          value={segment.image}
          onChange={handleImageChange}
          fullWidth
        />
        
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "var(--primary-gold)",
            color: "black",
            ":hover": {
              backgroundColor: "var(--primary-gold-foreground)",
            },
          }}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default StoryEditForm;