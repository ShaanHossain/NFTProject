import React from 'react';

interface FrequentlyAskedQuestionProps {
    question: string;
    answer: string;
}

const FrequentlyAskedQuestion: React.FC<FrequentlyAskedQuestionProps> = props => {

    return (
        <div>
            <div>{props.question}</div>
            <div>{props.answer}</div>
        </div>
    )
}
export default FrequentlyAskedQuestion;