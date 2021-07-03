import React, { Suspense } from 'react'
import { craeteResource } from './api/testapi'
import PhotoList from './components/PhotoList';
import LoadingContainer from './components/LoadingContainer';

const resource = craeteResource();

const App = () => {
  return (
    <Suspense fallback={<LoadingContainer />}>
      <PhotoList resource={resource} ></PhotoList>
    </Suspense>
  )
}

export default App
