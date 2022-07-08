export interface IMainNavbar {}

const MainNavbar: React.FC<IMainNavbar> = ({}) => {
  return (
    <div className="flex flex-row justify-between">
      <section>Logo</section>
      <section className="flex flex-row">
        <div>Menu</div>
        <div>User Section</div>
      </section>
    </div>
  );
};

export default MainNavbar;
