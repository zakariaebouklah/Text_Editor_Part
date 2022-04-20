import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import TextEditor from '../../components/TextEditor'

function Doc() {
    //for the icon we want to go back to the home page when it gets clicked.
  return (
    <div>
        <header className='flex justify-between items-center p-3 pb-1'>
            <Icon name='description' size='5xl' color='blue'/>
            <div className='flex-grow px-2'>
                <h2>FileNameFromFireStore</h2>
                <div className='flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600'>
                    <p className='option'>File</p>
                    <p className='option'>Edit</p>
                    <p className='option'>View</p>
                    <p className='option'>Insert</p>
                    <p className='option'>Format</p>
                    <p className='option'>Tools</p>
                </div>
            </div>

            <Button
                color='lightBlue'
                buttonType='filled'
                size='regular'
                className='hidden md:!inline-flex h-10'
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"            
            >
                <Icon name='people' size='md'/>SHARE
            </Button>

            <img 
                src='#' 
                alt='' 
                className='cursor-pointer rounded-full h-10 w-10 ml-2'
            />

        </header>

        <TextEditor/>

    </div>
  )
}

export default Doc