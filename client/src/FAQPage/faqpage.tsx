import React from 'react';
import FrequentlyAskedQuestion from './frequentlyAskedQuestion'

interface FAQPageProps {}

const FAQPage: React.FC<FAQPageProps> = props => {
    const question1 = {
        question: 'What is Lax Dolphin Lagoon?',
        answer: 'Lax Dolphin Lagoon is a collection of 10,000 unique, randomly generated dolphins swimming in the ocean of the Ethereum blockchain as ERC-721 NFTs. Our goal is to create a highly supportive and active community. We are looking forward to getting to know our future dolphin holders!',
    }
    const question2 = {
        question: 'How many can I buy?',
        answer: 'Limited to 15 per transaction',
    }
    const question3 = {
        question: 'What are my rights?',
        answer: 'You own the commercial rights to your dolphin, as long as it is in your ethereum wallet',
    }
    const question4 = {
        question: 'What are the odds of a duplicate dolphin?',
        answer: 'We don’t teach statistics, but Impossible',
    }
    const question5 = {
        question: 'Who is behind the project?',
        answer: '3 good friends that have a huge passion for the NFT space, and are very excited to create and grow their own community. ',
    }

    const faqList = [question1, question2, question3, question4, question5];

    const frequentlyAskedQuestion = (question: string, answer: string, idx: number) => {
        const newId = `#collapse${idx}`;
        return (
            <div className="mt-5">
                <p>
                    <button className="faqButton btn btn-primary beachFont" type="button" data-bs-toggle="collapse" data-bs-target={newId} aria-expanded="false" aria-controls={newId}>
                        {question}
                    </button>
                </p>
                <div className="collapse" id={`collapse${idx}`}>
                    <div className="collapseBody card card-body mx-5">
                        {answer}
                    </div>
                </div>
            </div>
        )
    }

    return (
            <div id="faq-page" className="d-flex justify-content-center align-items-center">
                <div>
                    <div>
                        <p className="title mb-5">Frequently Asked Questions:</p>
                    </div>
                    <hr/>
                    <div className="accordion container" id="accordionFAQ">
                        {faqList.map((faq, idx) => {
                            return (
                                frequentlyAskedQuestion(faq.question, faq.answer, idx)
                            )
                        })}
                    </div>
                </div>
        </div>
    )
}
export default FAQPage;