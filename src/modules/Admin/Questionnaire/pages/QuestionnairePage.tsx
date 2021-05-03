import React, { useEffect, useState } from "react";
import { QuestionnaireService } from "../../../../services";
import { Button } from "../../../../shared/Button/Button";
import { Flex } from "../../../../shared/Flex/Flex";
import Modal from "../../../../shared/Modal/Modal";
import QuestionnaireModal from "../../../../shared/QuestionnaireModal/QuestionnaireModal";
import { Spinner } from "../../../../shared/Spinner/Spinner";
import { QuestionnaireItem } from "../components/articles/QuestionnaireItem";
import { NewsCalendar } from "../components/calendar/NewsCalendar";

export const QuestionnairePage: React.FC = () => {
  const [isDeleteModalOpen, setDeleteModalVisible] = useState<boolean>(false);
  const [isFormQuestModalOpen, setFormQuestModalVisible] = useState<boolean>(false);

  const [loadingQuestionnaire, setLoadingQuestionnaire] = useState(false);
  const [questionnaireList, setQuestionnaireList] = useState([]);

  const [questionIdSelected, setQuestionIdSelected] = useState<number>(0);
  const [questionNameSelected, setQuestionNameSelected] = useState<string>("");

  const [questionnaireToEdit, setQuestionnaireToEdit] = useState();

  useEffect(() => {
    getQuestionnaire();
  }, [])

  const getQuestionnaire = () => {
    setLoadingQuestionnaire(true);
    QuestionnaireService.getList().then((response) => {
      if (response && response.data) {
        setQuestionnaireList(response.data);
      }
      setLoadingQuestionnaire(false);
    }).catch((error) => {
      console.log(error)
      setLoadingQuestionnaire(false);
    })
  }

  const deleteRequest = () => {
    toggleDeleteModal();
    if (questionIdSelected !== 0) {
      setLoadingQuestionnaire(true);
      QuestionnaireService.deleteQuestionnaire(questionIdSelected).then((response) => {
        if (response && response.data) {
          getQuestionnaire();
        }
      }).catch((error) => {
        console.log(error)
        setLoadingQuestionnaire(false);
      })
    }
  };

  const saveQuestionnaire = (qPayload: any, type: string) => {
    if (type === 'POST') {
      toggleFormQuestModal();
      setLoadingQuestionnaire(true);
      QuestionnaireService.newQuestionnaire(qPayload).then((response) => {
        if (response && response.data) {
          getQuestionnaire();
        }
      }).catch((error) => {
        console.log(error)
        setLoadingQuestionnaire(false);
      })
    } else {
      toggleFormQuestModal();
      setLoadingQuestionnaire(true);
      QuestionnaireService.updateQuestionnaire(qPayload).then((response) => {
        if (response && response.data) {
          getQuestionnaire();
        }
      }).catch((error) => {
        console.log(error)
        setLoadingQuestionnaire(false);
      })
    }
  }

  const handleSelect = (val: boolean, questionaryId: any, questionaryName: string) => {
    /* if (val) {
      let isSelected = questionnaireSelected.filter((val) => { return val === questionaryId }).length;
      if (isSelected === 0) {
        setQuestionnaireSelected([...questionnaireSelected, questionaryId]);
      }
    } else {
      let questionaryTemp = [...questionnaireSelected];
      const index = questionaryTemp.indexOf(questionaryId);
      if (index > -1) {
        questionaryTemp.splice(index, 1)
        setQuestionnaireSelected(questionaryTemp);
      }
    } */
    if (questionIdSelected === questionaryId) {
      setQuestionIdSelected(0);
      setQuestionNameSelected("");
    } else {
      setQuestionIdSelected(questionaryId);
      setQuestionNameSelected(questionaryName);
    }

  }

  const toggleDeleteModal = () => {
    setDeleteModalVisible((p) => !p);
  };

  const onEdit = () => {
    if (questionIdSelected !== 0) {
      setLoadingQuestionnaire(true);
      QuestionnaireService.getByIdQuestionnaire(questionIdSelected).then((response) => {
        if (response && response.data) {
          setQuestionnaireToEdit(response.data);
          setFormQuestModalVisible((p) => !p);
        }
        setLoadingQuestionnaire(false);
      }).catch((error) => {
        console.log(error)
        setLoadingQuestionnaire(false);
      })
    }
  }

  const toggleFormQuestModal = () => {
    if (isFormQuestModalOpen) {
      setQuestionnaireToEdit(undefined);
      setQuestionIdSelected(0);
      setQuestionNameSelected("");
    }
    setFormQuestModalVisible(!isFormQuestModalOpen);
  };

  return (
    <>
      {!loadingQuestionnaire && (
        <div className="news-page-container">
          <Flex
            className="button-container"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Nuevo"
              type="button"
              onClick={toggleFormQuestModal}
            />
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Editar"
              type="button"
              onClick={onEdit}
              disabled={questionIdSelected === 0}
            />
            <Button
              width="108px"
              className="button"
              loading={false}
              text="Eliminar"
              type="button"
              disabled={questionIdSelected === 0}
              onClick={toggleDeleteModal}
            />
          </Flex>

          <Flex justifyContent="space-between" className="news-section-container">
            <Flex className="news-list-container" direction="column">
              <Flex>
                <h1 className="title">Lista de Cuestionarios</h1>

              </Flex>
              {questionnaireList.length && (
                <>
                  {questionnaireList.map((value: any) => {
                    return <QuestionnaireItem
                      key={value.questionaryId}
                      name={value.name}
                      selected={value.questionaryId === questionIdSelected}
                      onselect={(val) => {
                        value.selected = val;
                        handleSelect(val, value.questionaryId, value.name);
                      }} />
                  })}
                </>
              )}
            </Flex>
            <NewsCalendar />
          </Flex>
        </div>
      )}
      {loadingQuestionnaire && (
        <Flex
          justifyContent="center"
          alignItems="center">
          <Spinner color={"#000000"} width={"50px"} height={"50px"} />
        </Flex>
      )}
      <Modal
        callback={deleteRequest}
        isOpen={isDeleteModalOpen}
        loading={false}
        toggle={toggleDeleteModal}
      />

      <QuestionnaireModal
        callback={saveQuestionnaire}
        isOpen={isFormQuestModalOpen}
        loading={false}
        toggle={toggleFormQuestModal}
        toEdit={questionnaireToEdit}
        nameToEdit={questionNameSelected}
        questionaryId={questionIdSelected}
      />
    </>
  );
};
