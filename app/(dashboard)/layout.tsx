import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className="md:flex 
            md:w-60 h-full 
            md:flex-col md:fixed md: inset-y-0 z-[80] bg-gray-700">
                <Sidebar/>
            </div>
            <main className="md:pl-60">
                <Navbar />
                {children}
            </main>
        </div>
    );
}

export default DashboardLayout;