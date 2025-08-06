import { Card } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
}

interface Team {
  name: string;
  color: 'executive' | 'development' | 'content' | 'business';
  members: TeamMember[];
}

const OrganizationalChart = () => {
  const teams: Team[] = [
    {
      name: "Directors & Executive Team",
      color: "executive",
      members: [
        { name: "Vivek Kumar Singh", role: "CEO and CTO" },
        { name: "Pradosh Priyadarshan", role: "CEO and CTO" },
        { name: "Kishore Kumar Nayak", role: "USA Management and Marketing" },
        { name: "Atul Saswat", role: "Technology" },
        { name: "Omkar Ankit", role: "Marketing and Strategy" },
        { name: "Pritish Pradhan", role: "Marketing and Strategy" }
      ]
    },
    {
      name: "Development Team",
      color: "development",
      members: [
        { name: "Surya Narayan Mohapatra", role: "GEN AI Developer" },
        { name: "Saumya Vani Namballa", role: "Java Full Stack" },
        { name: "Pramod Dhaygude", role: "Full Stack Developer" },
        { name: "Satya Bhusan", role: "Development Team Member (Monitoring & Support)" }
      ]
    },
    {
      name: "Content Management Team",
      color: "content",
      members: [
        { name: "Shruti Rani", role: "Spiritual Content Manager" },
        { name: "Sonam Sanket", role: "Psychological Content Manager" }
      ]
    }
  ];

  const getTeamColorClasses = (color: string) => {
    switch (color) {
      case 'executive':
        return 'bg-executive text-executive-foreground border-executive/20';
      case 'development':
        return 'bg-development text-development-foreground border-development/20';
      case 'content':
        return 'bg-content text-content-foreground border-content/20';
      case 'business':
        return 'bg-business text-business-foreground border-business/20';
      default:
        return 'bg-primary text-primary-foreground';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-6 bg-transparent text-primary-foreground px-8 py-6 rounded-2xl backdrop-blur-sm mb-6">
            <img 
              src="/lovable-uploads/a6296b81-6547-47cd-ac0a-c840ffa410a7.png" 
              alt="KARMIQ Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg"
              style={{ filter: 'drop-shadow(var(--glow-star))' }}
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">KARMIQ</h1>
              <p className="text-lg md:text-xl font-medium opacity-90">Spiritual And Wellness Platform</p>
            </div>
          </div>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className="space-y-6">
              {/* Team Header */}
              <div className="text-center relative">
                <h2 className="text-xl font-bold text-foreground mb-6 px-6 py-3 bg-gradient-to-r from-card to-card/80 rounded-xl shadow-lg border-2 border-border/50 backdrop-blur-sm">
                  {team.name}
                </h2>
                {/* Connecting line from header to first member */}
                <div className="absolute left-1/2 w-0.5 h-6 bg-foreground/40 transform -translate-x-0.5 z-0"></div>
              </div>

              {/* Team Members */}
              <div className="space-y-4 relative">
                {team.members.map((member, memberIndex) => (
                  <div key={memberIndex} className="relative">
                    <Card
                      className={`p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${getTeamColorClasses(team.color)} relative z-10`}
                    >
                      <div className="text-center">
                        <h3 className="font-bold text-lg mb-2 leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium opacity-90 leading-relaxed">
                          {member.role}
                        </p>
                      </div>
                    </Card>
                    {/* Connecting line to next member (except for last member) */}
                    {memberIndex < team.members.length - 1 && (
                      <div className="absolute left-1/2 w-0.5 h-4 bg-foreground/40 transform -translate-x-0.5 z-0"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Business Development Hierarchical Chart */}
        <div className="bg-card rounded-2xl shadow-xl p-8 mb-12 border">
          <div className="relative">
            {/* Business Development Header */}
            <div className="text-center mb-12">
              <Card className="inline-block px-8 py-4 bg-gradient-to-r from-card to-card/80 border-2 border-border/50 shadow-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-foreground">Business Development</h2>
              </Card>
            </div>

            {/* First Row - Marketing Heads and Strategy Head */}
            <div className="flex justify-center mb-8">
              <div className="flex gap-8 items-center">
                <Card className={`p-6 shadow-lg border-2 ${getTeamColorClasses('business')}`}>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">Omkar Ankit</h3>
                    <p className="text-sm font-medium opacity-90">Marketing Head</p>
                  </div>
                </Card>

                <Card className={`p-6 shadow-lg border-2 ${getTeamColorClasses('business')}`}>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">Pritish Pradhan</h3>
                    <p className="text-sm font-medium opacity-90">Marketing Head</p>
                  </div>
                </Card>

                <Card className={`p-6 shadow-lg border-2 ${getTeamColorClasses('business')}`}>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">Shruti Rani</h3>
                    <p className="text-sm font-medium opacity-90">Spiritual Development Strategy Head</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Second Row - B2B School Tieups */}
            <div className="flex justify-center">
              <Card className={`p-6 shadow-lg border-2 ${getTeamColorClasses('business')}`}>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Aditya Tripathy</h3>
                  <p className="text-sm font-medium opacity-90">B2B School Tieups</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <Card className="inline-block px-8 py-4 bg-card/80 backdrop-blur-sm border shadow-lg">
            <p className="text-muted-foreground font-medium text-lg">
              Empowering wellness through technology and human connection
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;