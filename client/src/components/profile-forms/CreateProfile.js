import React, { useState, Fragment } from 'react'


const CreateProfile = () => {

    const [SocialDisplay, toggleSocialDisplay] = useState(false);
    const initState = {
        company: '',
        website: '',
        location: '',
        skills: '',
        bio: '',
        githubusername: '',
        twitter: '',
        facebook: '',
        youtube: '',
        linkedin: '',
        instagram:''
    }
    const [profile, setProfile] = useState(initState);

    const { company, website, location, skills, bio, githubusername, twitter, facebook, youtube, linkedin, instagram } = profile;

    const handleProfileChange = (e) => {
        const { name, value } = e.target.value;
        setProfile(previousState => ({
            ...previousState,
            [name]:value
        }))
    }


    return (
    <div className='container'>
    <h1 class="large text-primary">
        Create Your Profile
    </h1>
      <p class="lead">
        <i class="fas fa-user"></i> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form class="form">
        <div class="form-group">
          <select name="status">
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small class="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>
        <div class="form-group">
                    <input type="text" placeholder="Company" name="company" value={company} onChange={e=>handleProfileChange(e)}/>
          <small class="form-text"
            >Could be your own company or one you work for</small
          >
        </div>
        <div class="form-group">
          <input type="text" placeholder="Website" name="website" value={website} onChange={e=>handleProfileChange(e)}/>
          <small class="form-text"
            >Could be your own or a company website</small
          >
        </div>
        <div class="form-group">
            <input type="text" placeholder="Location" name="location" value={location} onChange={e=>handleProfileChange(e)}/>
          <small class="form-text"
            >City & state suggested (eg. Boston, MA)</small
          >
        </div>
        <div class="form-group">
                    <input type="text" placeholder="* Skills" name="skills" value={skills} onChange={e=>handleProfileChange(e)}/>
          <small class="form-text"
            >Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small
          >
        </div>
        <div class="form-group">
        <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
          />
          <small class="form-text"
            >If you want your latest repos and a Github link, include your
            username</small
          >
        </div>
        <div class="form-group">
          <textarea placeholder="A short bio of yourself" name="bio" value={bio} onChange={e=>handleProfileChange(e)}></textarea>
          <small class="form-text">Tell us a little about yourself</small>
        </div>

        <div class="my-2">
          <button type="button" class="btn btn-light" onClick={()=>toggleSocialDisplay(!SocialDisplay)} onChange={e=>handleProfileChange(e)}>
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>
                {SocialDisplay &&
                    <Fragment>
                    <div class="form-group social-input">
                        <i class="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e=>handleProfileChange(e)}/>
                    </div>
                    <div class="form-group social-input">
                        <i class="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e=>handleProfileChange(e)}/>
                    </div>

                    <div class="form-group social-input">
                        <i class="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e=>handleProfileChange(e)}/>
                    </div>

                    <div class="form-group social-input">
                        <i class="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e=>handleProfileChange(e)}/>
                    </div>

                    <div class="form-group social-input">
                        <i class="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e=>handleProfileChange(e)}/>
                    </div>
                    <input type="submit" class="btn btn-primary my-1" />
                    <a class="btn btn-light my-1" href="dashboard.html">Go Back</a>
                    </Fragment>
    }
      </form>

    </div>
    )

}


export default CreateProfile;