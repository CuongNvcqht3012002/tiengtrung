import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Heading,
  Textarea,
} from '@chakra-ui/react';

const QuizzSection = () => {

    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [feedback, setFeedback] = useState('');
  
    const handleOptionChange1 = (event) => {
        setSelectedOption1(event);
    };

    const handleOptionChange2 = (event) => {
        setSelectedOption2(event);
    };
  
    const handleFeedbackChange = (event) => {
      setFeedback(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle survey submission here
      console.log('Selected Option 1:', selectedOption1);
      console.log('Selected Option 2:', selectedOption2);
      console.log('Feedback:', feedback);
      // You can perform further actions like sending data to a server
    };
  
    return (
        <Box maxWidth={800}>
            <Heading mb={4}>Trả lời câu hỏi</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl as="fieldset" mb={4}>
                    <FormLabel as="legend">Bạn có thích khóa học này không?</FormLabel>
                    <RadioGroup value={selectedOption1} onChange={handleOptionChange1}>
                    <Stack spacing={2}>
                        <Radio value="a">Đáp án a</Radio>
                        <Radio value="b">Đáp án b</Radio>
                        <Radio value="c">Đáp án c</Radio>
                        <Radio value="d">Đáp án d</Radio>
                    </Stack>
                    </RadioGroup>
                </FormControl>
                <FormControl as="fieldset" mb={4}>
                    <FormLabel as="legend">Khóa học này như nào?</FormLabel>
                    <RadioGroup value={selectedOption2} onChange={handleOptionChange2}>
                    <Stack spacing={2}>
                        <Radio value="e">Đáp án e</Radio>
                        <Radio value="f">Đáp án f</Radio>
                        <Radio value="g">Đáp án g</Radio>
                        <Radio value="h">Đáp án h</Radio>
                    </Stack>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Ý kiến và góp ý</FormLabel>
                    <Textarea
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Hãy chia sẻ ý kiến của bạn..."
                    />
                </FormControl>
                <Button mt={4} colorScheme="teal" type="submit">
                    Gửi
                </Button>
            </form>
        </Box>
    )
}

export default QuizzSection;
