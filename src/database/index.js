import Sequelize from 'sequelize';

import ModelLogErrors from '../app/models/LogErrors';
import ModelApiForSeo from '../app/models/ApiForSeo';
import ModelMozResults from '../app/models/MozResults';
import ModelFailedJobs from '../app/models/FailedJobs';
import ModelLogRequests from '../app/models/LogRequests';
import ModelFinishedJobs from '../app/models/FinishedJobs';
import ModelAlexaRankResults from '../app/models/AlexaRank';
import ModelLogRequestsApi from '../app/models/LogRequestsApis';
import ModelTaskCreatedIds from '../app/models/TaskCreatedIds';
import ModelPerformanceUrls from '../app/models/PerformanceUrls';
import ModelGoogleIndexPages from '../app/models/GoogleIndexPages';

const models = [
  ModelLogErrors,
  ModelMozResults,
  ModelApiForSeo,
  ModelFailedJobs,
  ModelLogRequests,
  ModelFinishedJobs,
  ModelLogRequestsApi,
  ModelTaskCreatedIds,
  ModelPerformanceUrls,
  ModelAlexaRankResults,
  ModelGoogleIndexPages,
];

import dbConfig from '../config/database';

class Database
{
  constructor()
  {
    this.init();
  }

  init()
  {
    this.connection = new Sequelize(dbConfig);
    models.map((model) => model.init(this.connection)).map((model) => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
