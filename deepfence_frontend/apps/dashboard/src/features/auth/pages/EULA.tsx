import { useLoaderData } from 'react-router-dom';
import { Card } from 'ui-components';

import { getCommonApiClient } from '@/api/api';
import LoginBackground from '@/assets/background-login.svg';
import { apiWrapper } from '@/utils/api';

type LoaderData = {
  message: string;
};

const loader = async (): Promise<LoaderData> => {
  const getEula = apiWrapper({
    fn: getCommonApiClient().getEula,
    options: {
      handleAuthError: false,
    },
  });

  const eulaResponse = await getEula();
  if (!eulaResponse.ok) {
    throw eulaResponse.error;
  }

  return {
    message: eulaResponse.value.message,
  };
};

const EULA = () => {
  const loaderData = useLoaderData() as LoaderData;

  return (
    <div
      className="grid h-screen place-items-center overflow-auto bg-cover"
      style={{
        backgroundImage: `url("${LoginBackground}")`,
      }}
    >
      <div className="relative">
        <div className="h-full grid place-items-center">
          <Card className="w-full max-w-[900px] p-8 my-8">
            <div
              style={{
                whiteSpace: 'pre-wrap',
              }}
            >
              {loaderData.message}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const module = {
  loader,
  element: <EULA />,
};
