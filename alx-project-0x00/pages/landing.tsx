import React from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold gap-6">
      <h1>Airbnb Application Clone system</h1>
      <div className="flex flex-wrap gap-4">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Button title="Small Rounded" styles={{ size: 'small', shape: 'rounded-sm' }} />
        <Button title="Small Medium" styles={{ size: 'small', shape: 'rounded-md' }} />
        <Button title="Small Full" styles={{ size: 'small', shape: 'rounded-lg' }} />
        <Button title="Medium Rounded" styles={{ size: 'medium', shape: 'rounded-sm' }} />
        <Button title="Medium Medium" styles={{ size: 'medium', shape: 'rounded-md' }} />
        <Button title="Medium Full" styles={{ size: 'medium', shape: 'rounded-lg' }} />
        <Button title="Large Rounded" styles={{ size: 'large', shape: 'rounded-sm' }} />
        <Button title="Large Medium" styles={{ size: 'large', shape: 'rounded-md' }} />
        <Button title="Large Full" styles={{ size: 'large', shape: 'rounded-lg' }} />
      </div>
      <Button title="Get Started" styles={{ size: 'medium', shape: 'rounded-lg' }} />
    </main>
  );
};

export default Landing;