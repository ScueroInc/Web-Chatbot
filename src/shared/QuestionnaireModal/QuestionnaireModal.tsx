import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { Button } from "../Button/Button";
import { Flex } from "../Flex/Flex";
import { Input } from "../Input/Input";
import { QuestionItem } from './components/QuestionItem';
import "./index.scss";

type Answer = {
  answerId?: number;
  answerText: string;
  isCorrect: boolean;
}

type Question = {
  questionId?: number;
  questionText: string;
  answers: Answer[];
}

interface IProps {
  isOpen: boolean;
  toggle(): void;
  loading: boolean;
  toEdit?: any;
  nameToEdit?: string;
  questionaryId?: number;
  callback(questionnairePayload?: any, type?: string): void;
}
const QuestionnaireModal: React.FC<IProps> = ({ loading, callback, isOpen, toggle, toEdit, nameToEdit, questionaryId }) => {
  const modalElement = document.getElementById("modal-root");
  const close = useCallback(() => toggle(), [toggle]);

  const [name, setName] = useState<string>("");

  const [question1, setQuestion1] = useState<Question>({ questionText: "", answers: [{ answerText: "Verdadero", isCorrect: true }, { answerText: "Falso", isCorrect: false }] });
  const [question2, setQuestion2] = useState<Question>({ questionText: "", answers: [{ answerText: "Verdadero", isCorrect: true }, { answerText: "Falso", isCorrect: false }] });
  const [question3, setQuestion3] = useState<Question>({ questionText: "", answers: [{ answerText: "Verdadero", isCorrect: true }, { answerText: "Falso", isCorrect: false }] });
  const [question4, setQuestion4] = useState<Question>({ questionText: "", answers: [{ answerText: "Verdadero", isCorrect: true }, { answerText: "Falso", isCorrect: false }] });
  const [question5, setQuestion5] = useState<Question>({ questionText: "", answers: [{ answerText: "Verdadero", isCorrect: true }, { answerText: "Falso", isCorrect: false }] });

  let history = useHistory();


  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  const handleSave = () => {
    console.log(question1)
    if (toEdit && questionaryId) {
      let userLogged = localStorage.getItem("token");
      if (userLogged) {
        if (name === "" || question1.questionText === "" || question2.questionText === "" || question3.questionText === "" || question4.questionText === "" || question5.questionText === "") {
          alert("Rellene todos los campos");
        } else {
          let userInfo = JSON.parse(userLogged);
          const questionnairePayload = {
            userId: userInfo.userId,
            questionaryUpdateDto: {
              questionaryId: questionaryId,
              name
            },
            questionUpdateDtos: [
              {
                questionId: question1.questionId,
                questionText: question1.questionText,
                answerDtos: question1.answers
              },
              {
                questionId: question2.questionId,
                questionText: question2.questionText,
                answerDtos: question2.answers
              },
              {
                questionId: question3.questionId,
                questionText: question3.questionText,
                answerDtos: question3.answers
              },
              {
                questionId: question4.questionId,
                questionText: question4.questionText,
                answerDtos: question4.answers
              },
              {
                questionId: question5.questionId,
                questionText: question5.questionText,
                answerDtos: question5.answers
              }
            ]
          }
          callback(questionnairePayload, 'PUT')
        }
      } else {
        history.push('/login');
      }
    } else {
      //NUEVO
      let userLogged = localStorage.getItem("token");
      if (userLogged) {
        if (name === "" || question1.questionText === "" || question2.questionText === "" || question3.questionText === "" || question4.questionText === "" || question5.questionText === "") {
          alert("Rellene todos los campos");
        } else {
          let userInfo = JSON.parse(userLogged);
          const questionnairePayload = {
            userId: userInfo.userId,
            questionaryCreateDto: {
              name
            },
            questionCreateDtos: [
              question1,
              question2,
              question3,
              question4,
              question5
            ]
          }
          callback(questionnairePayload, 'POST')
        }
      } else {
        history.push('/login');
      }
    }
  }

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);

    if (toEdit && nameToEdit) {
      setName(nameToEdit);
      setQuestion1({
        questionId: toEdit[0].questionId,
        questionText: toEdit[0].questionText,
        answers: toEdit[0].answerDtos
      });

      setQuestion2({
        questionId: toEdit[1].questionId,
        questionText: toEdit[1].questionText,
        answers: toEdit[1].answerDtos
      });

      setQuestion3({
        questionId: toEdit[2].questionId,
        questionText: toEdit[2].questionText,
        answers: toEdit[2].answerDtos
      });

      setQuestion4({
        questionId: toEdit[3].questionId,
        questionText: toEdit[3].questionText,
        answers: toEdit[3].answerDtos
      });

      setQuestion5({
        questionId: toEdit[4].questionId,
        questionText: toEdit[4].questionText,
        answers: toEdit[4].answerDtos
      });
    }

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
    // eslint-disable-next-line
  }, [handleEscape, isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Flex
      justifyContent="center"
      alignItems="center"
      className="modal-container"
    >
      <Flex direction="column" className="card">
        <h3>Formulario Cuestionario</h3>

        <div className="field">
          <div>
            <Input
              name="name"
              placeholder="Nombre del Cuestionario"
              type="text"
              value={name}
              required={true}
              width='286px'
              isSecure={true}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>

        <h3>Respuestas</h3>

        <div className="field">
          <QuestionItem
            question={question1}
            nameSelected={question1.questionText}
            onselect={(val, type) => {
              if (type === 'V') {
                let qTemp: Question = question1;
                qTemp.answers[0].isCorrect = val;
                qTemp.answers[1].isCorrect = !val;
                setQuestion1(qTemp);
              } else {
                let qTemp: Question = question1;
                qTemp.answers[1].isCorrect = val;
                qTemp.answers[0].isCorrect = !val;
                setQuestion1(qTemp);
              }
            }}
            onChangeQuestion={(val) => {
              let qTemp: Question = question1;
              qTemp.questionText = val;
              setQuestion1(qTemp);
            }} />
        </div>

        <div className="field">
          <QuestionItem
            question={question2}
            nameSelected={question2.questionText}
            onselect={(val, type) => {
              if (type === 'V') {
                let qTemp: Question = question2;
                qTemp.answers[0].isCorrect = val;
                qTemp.answers[1].isCorrect = !val;
                setQuestion2(qTemp);
              } else {
                let qTemp: Question = question2;
                qTemp.answers[1].isCorrect = val;
                qTemp.answers[0].isCorrect = !val;
                setQuestion2(qTemp);
              }
            }}
            onChangeQuestion={(val) => {
              let qTemp: Question = question2;
              qTemp.questionText = val;
              setQuestion2(qTemp);
            }} />
        </div>

        <div className="field">
          <QuestionItem
            question={question3}
            nameSelected={question3.questionText}
            onselect={(val, type) => {
              if (type === 'V') {
                let qTemp: Question = question3;
                qTemp.answers[0].isCorrect = val;
                qTemp.answers[1].isCorrect = !val;
                setQuestion3(qTemp);
              } else {
                let qTemp: Question = question3;
                qTemp.answers[1].isCorrect = val;
                qTemp.answers[0].isCorrect = !val;
                setQuestion3(qTemp);
              }
            }}
            onChangeQuestion={(val) => {
              let qTemp: Question = question3;
              qTemp.questionText = val;
              setQuestion3(qTemp);
            }} />
        </div>

        <div className="field">
          <QuestionItem
            question={question4}
            nameSelected={question4.questionText}
            onselect={(val, type) => {
              if (type === 'V') {
                let qTemp: Question = question4;
                qTemp.answers[0].isCorrect = val;
                qTemp.answers[1].isCorrect = !val;
                setQuestion4(qTemp);
              } else {
                let qTemp: Question = question4;
                qTemp.answers[1].isCorrect = val;
                qTemp.answers[0].isCorrect = !val;
                setQuestion4(qTemp);
              }
            }}
            onChangeQuestion={(val) => {
              let qTemp: Question = question4;
              qTemp.questionText = val;
              setQuestion4(qTemp);
            }} />
        </div>

        <div className="field">
          <QuestionItem
            question={question5}
            nameSelected={question5.questionText}
            onselect={(val, type) => {
              if (type === 'V') {
                let qTemp: Question = question5;
                qTemp.answers[0].isCorrect = val;
                qTemp.answers[1].isCorrect = !val;
                setQuestion5(qTemp);
              } else {
                let qTemp: Question = question5;
                qTemp.answers[1].isCorrect = val;
                qTemp.answers[0].isCorrect = !val;
                setQuestion5(qTemp);
              }
            }}
            onChangeQuestion={(val) => {
              let qTemp: Question = question5;
              qTemp.questionText = val;
              setQuestion5(qTemp);
            }} />
        </div>




        <Flex
          className="btn-container"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            loading={false}
            text="Cancelar"
            type="button"
            onClick={close}
          />
          <Button
            onClick={handleSave}
            loading={loading}
            text={toEdit ? 'Editar' : 'Agregar'}
            type="button"
          />
        </Flex>
      </Flex>
    </Flex>,
    modalElement as Element
  );
};

export default QuestionnaireModal;
