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
  Checkbox,
  CheckboxGroup,
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
      confirm("Chúc mừng bạn đã vượt qua bài học này!");
      setSelectedOption1("");
      setSelectedOption2("");
      setFeedback("");
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
                    <FormLabel as="legend">Khóa học này tốt không?</FormLabel>
                    <RadioGroup value={selectedOption2} onChange={handleOptionChange2}>
                    <Stack spacing={2}>
                        <Radio value="e">Đúng</Radio>
                        <Radio value="f">Sai</Radio>
                    </Stack>
                    </RadioGroup>
                </FormControl>
                <FormControl as="fieldset" mb={4}>
                    <FormLabel as="legend">Khóa học này như nào?</FormLabel>
                    <CheckboxGroup>
                    <Stack spacing={2}>
                        <Checkbox value="e">Đáp án e</Checkbox>
                        <Checkbox value="f">Đáp án f</Checkbox>
                        <Checkbox value="g">Đáp án g</Checkbox>
                        <Checkbox value="h">Đáp án h</Checkbox>
                    </Stack>
                    </CheckboxGroup>
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
