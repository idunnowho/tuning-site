import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);


  return (
    <div>
        <h1 className=''>404 Error Not Found</h1>
        <p>
            Sorry, an unexpected error occurred. Please try again later.
        </p>
        <p>
            <i>
                {error.statusText || error.message}
            </i>
        </p>
    </div>
  )
}