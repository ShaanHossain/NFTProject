import React from 'react';

interface FrequentlyAskedQuestionProps {
    question: string;
    answer: string;
    id: number;
}

const FrequentlyAskedQuestion: React.FC<FrequentlyAskedQuestionProps> = props => {

    const newId = `#collapse${props.id}`;
    return (
        <div className="mt-5">
                <button className="faqButton btn btn-primary beachFont" type="button" data-bs-toggle="collapse" data-bs-target={newId} aria-expanded="false" aria-controls={newId}>
                    {props.question}
                </button>
            <div className="collapse" id={`collapse${props.id}`}>
                <div className="card card-body mx-5 w-70">
                    {props.answer}
                </div>
            </div>
        </div>
    )
}
export default FrequentlyAskedQuestion;