import IntegrationForm from '../IntegrationForm';
import RegionDropdown from './RegionDropdown';
import DocLink from 'Shared/DocLink/DocLink';

const SumoLogicForm = (props) => (
  <>
    <div className="p-5 border-b mb-4">
      <div>How to integrate SumoLogic with OpenReplay and see backend errors alongside session recordings.</div>
      <DocLink className="mt-4" label="Integrate SumoLogic" url="https://docs.openreplay.com/integrations/sumo" />
    </div>
    <IntegrationForm 
      { ...props }
      name="sumologic"
      formFields={[ {
          key: "accessId",
          label: "Access ID",
        }, {
          key: "accessKey",
          label: "Access Key",
        }, {
          key: "region",
          label: "Region",
          component: RegionDropdown,
        }
      ]}
    /> 
  </>
);

SumoLogicForm.displayName = "SumoLogicForm";

export default SumoLogicForm;
