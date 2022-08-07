import { User } from "./User";
import { Statistics } from './Statistics';
import user from "../../src/data/user.json";
import data from "../../src/data/data.json";



export const App = () => {
  return (
    <div>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
