
export default function GridTest() {

return <div className="grid grid-cols-7 justify-center grid-rows-5 gap-4 p-5">
            <div className=" p-3 py-0 gap-5 grid grid-cols-2 row-span-6 col-span-2">
            <div className=" p-3 bg-sky-600 col-span-2 row-span-3">
                sky crew 1 and 1
            </div>
            <div className=" p-3 bg-sky-600 col-span-2 row-span-3">
                sky crew 1 and 2
            </div>
            </div>
            <div className=" p-3 bg-sky-600 col-span-3 row-span-3">
                sky crew 2
            </div>
            <div className=" p-3 bg-sky-600 col-span-2 row-span-4">
                sky crew 3
            </div>
            <div className="  col-span-3 grid grid-cols-2 gap-3 row-span-2">
            <div className=" p-3 bg-sky-600 row-span-3">
                sky crew 4
            </div>
            <div className=" p-3 bg-sky-600 row-span-3 ">
                sky crew 5
            </div>
           
            
            </div>
            <div className=" p-3 bg-sky-600 col-span-5 row-span-3 col-start-3">
                sky crew 6
            </div>
</div>
}