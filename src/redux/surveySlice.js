import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const surveySlice = createSlice({
  name: 'survey',
  initialState: {
    surveys: [],
    currentSurvey: null,
  },
  reducers: {
    setSurveys: (state, action) => {
      state.surveys = action.payload;
    },
    setCurrentSurvey: (state, action) => {
      state.currentSurvey = action.payload;
    },
    updateSurvey: (state, action) => {
      state.currentSurvey = {
        ...state.currentSurvey,
        components: action.payload,
      };
    },
  },
});

export const { setSurveys, setCurrentSurvey, updateSurvey } = surveySlice.actions;

export const fetchSurveyById = (id) => async (dispatch) => {
  const response = await axios.get(`/api/survey/${id}`);
  dispatch(setCurrentSurvey(response.data));
};

export const createSurvey = (survey) => async (dispatch) => {
  await axios.post('/api/survey', survey);
  // Fetch updated list of surveys if needed
};

export const saveSurvey = (id, survey) => async (dispatch) => {
  await axios.put(`/api/survey/${id}`, survey);
  dispatch(fetchSurveyById(id));
};

export default surveySlice.reducer;
