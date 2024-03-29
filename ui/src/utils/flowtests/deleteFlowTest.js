import axios from 'axios';
import snackbarUtils from '../../libs/snackbarUtils';

export default async function deleteFlowTest(flowList) {
  flowList.forEach(async (flow) => {
    try {
      const res = await axios.delete(`k8s/apis/loggingpipelineplumber.isala.me/v1beta1/namespaces/${flow.namespace}/flowtests/${flow.name}`);
      if (res.status === 200) {
        snackbarUtils.success(`Flow ${flow.name} deleted successfully`);
      } else {
        snackbarUtils.error(`Failed to delete flow test ${flow.name}`);
      }
    } catch (error) {
      snackbarUtils.error(`Failed to delete flow test ${flow.name} [${error.message}]`);
    }
  });
}
