import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSurveyById, saveSurvey, updateSurvey } from '../redux/surveySlice';
import Toolbox from './Toolbox';
import SurveyContainer from './SurveyContainer';

const EditSurvey = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentSurvey = useSelector((state) => state.survey.currentSurvey);

  useEffect(() => {
    dispatch(fetchSurveyById(id));
  }, [dispatch, id]);

  const handleSave = () => {
    if (currentSurvey) {
      dispatch(saveSurvey(id, currentSurvey));
    }
  };

  const handleUpdateSurvey = (components) => {
    dispatch(updateSurvey(components));
  };

  return (
    <div>
      <Toolbox />
      <SurveyContainer components={currentSurvey?.components} onUpdate={handleUpdateSurvey} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditSurvey;
