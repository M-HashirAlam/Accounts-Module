import * as React from 'react';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { AppContext } from '../../../Context/AppContext';
import ChartsTable from './COATable';



export default function RichObjectTreeView(props) {
    const data2 = props.dataForCOA
    const { setOpenMenu, setMenuPosition,childData,setChildData,mainName,setmainName } = React.useContext(AppContext)
    // const [childData, setChildData] = React.useState([])
    
    


    const renderTree = (data2) => (
        <TreeItem key={data2.accId} children={data2.component} nodeId={data2.accId} label={data2.name} onContextMenu={(e) => {
            e.preventDefault(); // prevent the default behaviour when right clicked 
            //    console.log((data.children))
            setOpenMenu(true)
        }

        } onClick={(e) => {
            // console.log(data2,'Nam')
            setChildData(data2.children)
            setmainName(data2)
            console.log(mainName, '1234');
        }}>
            {Array.isArray(data2.children)
                ? data2.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );

    return (
        
        <div className='flex mt-5  h-96 md:flex-row flex-col '>
            {/* scrollbar-track-gray-100 */}
            <div className="flex overflow-scroll  md:w-30p w-full h-full  scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-thumb-rounded   ">
                <Box sx={{ flexGrow: 1 }} >
                    <TreeView
                        aria-label="rich object"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpanded={['root']}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        {renderTree(data2)}
                    </TreeView>

                </Box>
            </div>
            {/* <div className='md:w-2p  flex flex-row w-2p bg-black'>
            
                <span className=' border-blue-900 bg-black border-4 md:min-h-full md:min-w-0 min-w-full min-h-0 md:mx-auto mx-auto'></span>
            </div> */}
            <div className=' md:w-68p w-full md:h-96 min-h-40   overflow-scroll scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-thumb-rounded'>
                <ChartsTable Tdata={childData} />
            </div>
            {/* <div className='border-blue-900  border-4'></div> */}
            {/* <div className=' border-blue-900  border-4 md:min-h-full min-h-0 md:mx-auto mx-0'></div> */}
            
        </div>
        
    );
}
