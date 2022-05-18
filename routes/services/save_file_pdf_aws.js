const AWS = require("aws-sdk");
const aws_config = require("../../constants/aws");

const media_upload = async(media_stream, content_type, path) => {
    try {

        //configure AWS to use promises
        AWS.config.setPromisesDependency(require("bluebird"));
        AWS.config.update({ accessKeyId: aws_config.AWS_ACCESS_KEY_ID, secretAccessKey: aws_config.AWS_SECRET_ACCESS_KEY, region: aws_config.AWS_REGION });

        // Create an s3 instance
        const bucket_params = {
            Bucket: aws_config.BUCKET_NAME
        }
        const s3 = new AWS.S3();

        try {
            await s3.headBucket(bucket_params).promise();
        }
        catch (err) {
            await s3.createBucket(bucket_params).promise();
        }


        const params = {
            Bucket: bucket_params.Bucket,
            Key: path, // type is not required
            Body: media_stream,
            ACL: 'public-read',
            ContentType: `${content_type}` // required. Notice the back ticks
        }
        let location = '';
        let key = '';
        try {
            const { Location, Key } = await s3.upload(params).promise();
            location = Location;
            key = Key;
        } catch (ex) {
            console.log(ex.message);
            return ex.message;
        }

        return location;
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { media_upload }