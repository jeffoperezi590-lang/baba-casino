// Apni backend login API function ke andar findOne ke upar aur niche ye logs check karein:

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  
  // 🔍 BACKEND LOG 1: What is arriving at the server
  console.log("=== BACKEND LOGIN INCOMING REQUEST ===");
  console.log("Received Username from Frontend:", username);

  try {
    // Database search query
    const user = await User.findOne({ username });

    if (!user) {
      // 🔍 BACKEND LOG 2: If DB returned null
      console.log(`❌ DB Lookup Failed: No user exists with the name [${username}]`);
      return res.status(404).json({ message: "User not found" });
    }

    // 🔍 BACKEND LOG 3: User found, checking data casing integrity
    console.log(`✅ DB Lookup Match: User found in database! Real DB Document Username is: [${user.username}]`);
    
    // Yahan aapka password verify karne ka normal logic chalega...
    if (user.password !== password) {
       return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ user });

  } catch (error) {
    console.error("Database Engine Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};