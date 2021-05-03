import React, { useEffect, useState } from "react";
import { Flex } from "../../Flex/Flex";
import { Input } from "../../Input/Input";
import "./index.scss";

type Answer = {
  answerText: string;
  isCorrect: boolean;
}

type Question = {
  questionText: string;
  answers: Answer[];
}

interface IProps {
  nameSelected?: string;
  selected?: boolean;
  question: Question;
  onselect: (val: boolean, type?: string) => void;
  onChangeQuestion: (val: string) => void;
}
export const QuestionItem: React.FC<IProps> = ({ selected = false, onselect, question, onChangeQuestion, nameSelected }) => {

  const [selectedV, setSelectedV] = useState<boolean>(question.answers[0].isCorrect);
  const [selectedF, setSelectedF] = useState<boolean>(question.answers[1].isCorrect);
  const [name, setName] = useState<string>(nameSelected ? nameSelected : "");

  useEffect(() => {
    console.log()
  }, [selectedF, selectedV])

  return (
    <>
      <Flex className="news-article-container">
        <Flex className="news-title" direction="column">
          <Input
            name="name"
            placeholder="Pregunta"
            type="text"
            value={name}
            required={true}
            width='286px'
            isSecure={true}
            onChange={(e) => {
              setName(e.target.value);
              onChangeQuestion(e.target.value);
            }}
          />
          <Flex className='answersContainer' alignItems="center" justifyContent='center' direction='row'>
            <Flex alignItems="center" direction='row'>
              <label className="container">
                <input
                  type="checkbox"
                  onChange={() => {
                    onselect(!selectedV, 'V'); setSelectedV(!selectedV); setSelectedF(selectedV);
                  }}
                  checked={selectedV}
                />
                <span className="checkmark"></span>
              </label>
              <p style={{ paddingTop: '45px' }}>{question.answers[0].answerText}</p>
            </Flex>
            <Flex alignItems="center" direction='row'>
              <label className="container">
                <input
                  type="checkbox"
                  onChange={() => {
                    onselect(!selectedF, 'F'); setSelectedV(selectedF); setSelectedF(!selectedF);
                  }}
                  checked={selectedF}
                />
                <span className="checkmark"></span>
              </label>
              <p style={{ paddingTop: '45px' }}>{question.answers[1].answerText}</p>
            </Flex>
          </Flex>
        </Flex>

      </Flex>
    </>
  );
};
