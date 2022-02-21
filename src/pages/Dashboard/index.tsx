import React from 'react';

import Cards from 'components/Cards';
import Heading from 'components/Heading';
import Stake from 'components/Stake';
import Withdrawals from 'components/Withdrawals';

import useGlobalData from '../../hooks/useGlobalData';

import styles from './styles.module.scss';

const Dashboard: React.FC = () => {
  useGlobalData();

  return (
    <div className={styles.dashboard}>
      <Heading />

      <Cards />

      <Stake />

      <Withdrawals />
    </div>
  );
};

export default Dashboard;
