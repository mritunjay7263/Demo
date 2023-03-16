import React,{Suspense, lazy} from 'react';
const Home = lazy(()=>import('./Home'));
const About = lazy(()=>import('./About'));

const LazyLoadingTask = () => {
  return (
    <>
      <h1>Lazy Loading</h1>
      <Suspense fallback={<div>Please wait... Home is Loading</div>}>
        <Home/>
      </Suspense>
      <Suspense fallback={<div>Please wait... About is Loading</div>}>
        <About/>
      </Suspense>
    </>
  )
}

export default LazyLoadingTask
